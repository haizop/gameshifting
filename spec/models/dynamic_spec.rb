# == Schema Information
#
# Table name: dynamics
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

RSpec.describe Dynamic, type: :model do
  it "has a valid factory" do
    expect(build(:dynamic)).to be_valid
  end

  describe  'validation' do
    it { should validate_presence_of(:name) }
  end

  describe 'association' do
    it { should have_many(:panel_dynamics).dependent(:destroy) }
    it { should have_many(:panels) }
  end
end

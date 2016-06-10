# == Schema Information
#
# Table name: panels
#
#  id            :integer          not null, primary key
#  name          :string
#  description   :text
#  default_setup :json
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'rails_helper'

RSpec.describe Panel, type: :model do
  it "has a valid factory" do
    expect(build(:panel)).to be_valid
  end

  describe  'validation' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:default_setup) }
  end

  describe 'association' do
    it { should have_many(:board_panels).dependent(:destroy) }
    it { should have_many(:boards) }
    it { should have_many(:panel_dynamics).dependent(:destroy) }
    it { should have_many(:dynamics) }
  end
end

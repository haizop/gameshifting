# == Schema Information
#
# Table name: panels
#
#  id            :integer          not null, primary key
#  name          :string
#  description   :text
#  default_state :json
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'rails_helper'

RSpec.describe Panel, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end

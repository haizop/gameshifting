# == Schema Information
#
# Table name: canvasses
#
#  id              :integer          not null, primary key
#  name            :string
#  description     :text
#  default_gameset :json
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Canvass < ActiveRecord::Base
end
